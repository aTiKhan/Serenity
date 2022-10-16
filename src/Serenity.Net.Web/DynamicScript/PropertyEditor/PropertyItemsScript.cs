﻿using Microsoft.Extensions.DependencyInjection;
using Serenity.PropertyGrid;

namespace Serenity.Web
{
    public abstract class PropertyItemsScript : INamedDynamicScript, IGetScriptData
    {
        private readonly string scriptName;
        private readonly Type type;
        private readonly IServiceProvider serviceProvider;
        private readonly IPropertyItemProvider propertyProvider;
        private EventHandler scriptChanged;

        protected PropertyItemsScript(string scriptName, Type type, 
            IPropertyItemProvider propertyProvider, IServiceProvider serviceProvider)
        {
            this.type = type ?? throw new ArgumentNullException(nameof(type));
            this.serviceProvider = serviceProvider ?? 
                throw new ArgumentNullException(nameof(serviceProvider));
            this.propertyProvider = propertyProvider ?? 
                throw new ArgumentNullException(nameof(PropertyItemsScript.propertyProvider));
            this.scriptName = scriptName;
        }

        protected static string CheckName(string name)
        {
            if (name.IsEmptyOrNull())
                throw new ArgumentNullException(nameof(name));

            return name;
        }

        public TimeSpan Expiration { get; set; }
        public string GroupKey { get; set; }

        public void Changed()
        {
            scriptChanged?.Invoke(this, new EventArgs());
        }

        public string ScriptName => scriptName;

        public void CheckRights(IPermissionService permissions, ITextLocalizer localizer)
        {
        }

        public string GetScript()
        {
            var data = GetScriptData();
            return string.Format(CultureInfo.InvariantCulture, "Q.ScriptData.set({0}, {1});", 
                scriptName.ToSingleQuoted(), data.ToJson());
        }

        public object GetScriptData()
        {
            var data = new PropertyItemsData
            {
                Items = propertyProvider.GetPropertyItemsFor(type).ToList(),
                AdditionalItems = new()
            };

            if (typeof(ICustomizePropertyItems).IsAssignableFrom(type))
            {
                var instance = ActivatorUtilities.CreateInstance(
                    serviceProvider, type) as ICustomizePropertyItems;
                instance.Customize(data.Items);
            }

            var basedOnRowAttr = type.GetCustomAttribute<BasedOnRowAttribute>();
            if (basedOnRowAttr != null &&
                basedOnRowAttr.RowType != null)
            {
                var existing = new HashSet<string>(data.Items.Select(x => x.Name));
                var additional = new HashSet<string>();
                foreach (var item in data.Items)
                {
                    if (!string.IsNullOrEmpty(item.FilteringIdField) &&
                        !existing.Contains(item.FilteringIdField))
                        additional.Add(item.FilteringIdField);
                }

                if (additional.Count > 0)
                {
                    data.AdditionalItems = propertyProvider.GetPropertyItemsFor(basedOnRowAttr.RowType,
                        property => additional.Contains(property.Name)).ToList();
                }
            }

            return data;
        }

        public event EventHandler ScriptChanged
        {
            add { scriptChanged += value; }
            remove { scriptChanged -= value; }
        }
    }
}