﻿namespace Serenity.ComponentModel
{
    /// <summary>
    /// Specifies required permission to access an object, e.g. a report
    /// </summary>
    /// <seealso cref="PermissionAttributeBase" />
    public class RequiredPermissionAttribute : PermissionAttributeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RequiredPermissionAttribute"/> class.
        /// </summary>
        /// <param name="permission">The permission.</param>
        public RequiredPermissionAttribute(object permission)
            : base(permission)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RequiredPermissionAttribute"/> class.
        /// A colon is inserted between module and permission to generate permission key.
        /// </summary>
        /// <param name="module">The module.</param>
        /// <param name="permission">The permission.</param>
        public RequiredPermissionAttribute(object module, object permission)
            : base(module, permission)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RequiredPermissionAttribute"/> class.
        /// A colon is inserted between module, submodule and permission to generate permission key.
        /// </summary>
        /// <param name="module">The module.</param>
        /// <param name="submodule">The submodule.</param>
        /// <param name="permission">The permission.</param>
        public RequiredPermissionAttribute(object module, object submodule, object permission)
            : base(module, submodule, permission)
        {
        }
    }
}