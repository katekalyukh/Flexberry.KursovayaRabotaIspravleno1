﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KursovayaRabotaIspravleno1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Фото.
    /// </summary>
    // *** Start programmer edit section *** (Фото CustomAttributes)

    // *** End programmer edit section *** (Фото CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФотоE", new string[] {
            "Количество as \'Количество\'",
            "Заказ.Фотокиоск.Товары.Вид as \'Вид фото\'",
            "Заказ.Фотокиоск.Товары.Стоимость as \'Стоимость\'"})]
    [View("ФотоL", new string[] {
            "Количество as \'Количество\'",
            "Заказ.Фотокиоск.Товары.Вид as \'Вид фото\'",
            "Заказ.Фотокиоск.Товары.Стоимость as \'Стоимость\'"})]
    public class Фото : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.KursovayaRabotaIspravleno1.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (Фото CustomMembers)

        // *** End programmer edit section *** (Фото CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (Фото.Количество CustomAttributes)

        // *** End programmer edit section *** (Фото.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (Фото.Количество Get start)

                // *** End programmer edit section *** (Фото.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (Фото.Количество Get end)

                // *** End programmer edit section *** (Фото.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Фото.Количество Set start)

                // *** End programmer edit section *** (Фото.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (Фото.Количество Set end)

                // *** End programmer edit section *** (Фото.Количество Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.KursovayaRabotaIspravleno1.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Фото.Заказ CustomAttributes)

        // *** End programmer edit section *** (Фото.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.KursovayaRabotaIspravleno1.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (Фото.Заказ Get start)

                // *** End programmer edit section *** (Фото.Заказ Get start)
                IIS.KursovayaRabotaIspravleno1.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (Фото.Заказ Get end)

                // *** End programmer edit section *** (Фото.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Фото.Заказ Set start)

                // *** End programmer edit section *** (Фото.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (Фото.Заказ Set end)

                // *** End programmer edit section *** (Фото.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФотоE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФотоE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФотоE", typeof(IIS.KursovayaRabotaIspravleno1.Фото));
                }
            }
            
            /// <summary>
            /// "ФотоL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФотоL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФотоL", typeof(IIS.KursovayaRabotaIspravleno1.Фото));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Фото.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfФото CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfФото CustomAttributes)
    public class DetailArrayOfФото : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.KursovayaRabotaIspravleno1.DetailArrayOfФото members)

        // *** End programmer edit section *** (IIS.KursovayaRabotaIspravleno1.DetailArrayOfФото members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Фото by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Фото.
        /// </summary>
        public DetailArrayOfФото(IIS.KursovayaRabotaIspravleno1.Заказ fЗаказ) : 
                base(typeof(Фото), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.KursovayaRabotaIspravleno1.Фото this[int index]
        {
            get
            {
                return ((IIS.KursovayaRabotaIspravleno1.Фото)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.KursovayaRabotaIspravleno1.Фото dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
