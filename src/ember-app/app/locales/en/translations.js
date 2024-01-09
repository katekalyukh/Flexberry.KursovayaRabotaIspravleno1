import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovayaRabotaIspravleno1ЗаказLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-заказ-l';
import IISKursovayaRabotaIspravleno1КлиентLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-клиент-l';
import IISKursovayaRabotaIspravleno1ОператорLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-оператор-l';
import IISKursovayaRabotaIspravleno1ПроверкаКиоскаLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l';
import IISKursovayaRabotaIspravleno1ТоварыLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-товары-l';
import IISKursovayaRabotaIspravleno1ФотокиоскLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l';
import IISKursovayaRabotaIspravleno1ЧекLForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-чек-l';
import IISKursovayaRabotaIspravleno1ЗаказEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-заказ-e';
import IISKursovayaRabotaIspravleno1КлиентEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-клиент-e';
import IISKursovayaRabotaIspravleno1ОператорEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-оператор-e';
import IISKursovayaRabotaIspravleno1ПроверкаКиоскаEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-e';
import IISKursovayaRabotaIspravleno1ТоварыEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-товары-e';
import IISKursovayaRabotaIspravleno1ФотокиоскEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-e';
import IISKursovayaRabotaIspravleno1ЧекEForm from './forms/i-i-s-kursovaya-rabota-ispravleno1-чек-e';
import IISKursovayaRabotaIspravleno1ЗаказModel from './models/i-i-s-kursovaya-rabota-ispravleno1-заказ';
import IISKursovayaRabotaIspravleno1КлиентModel from './models/i-i-s-kursovaya-rabota-ispravleno1-клиент';
import IISKursovayaRabotaIspravleno1ОператорModel from './models/i-i-s-kursovaya-rabota-ispravleno1-оператор';
import IISKursovayaRabotaIspravleno1ПроверкаКиоскаModel from './models/i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска';
import IISKursovayaRabotaIspravleno1ТоварыModel from './models/i-i-s-kursovaya-rabota-ispravleno1-товары';
import IISKursovayaRabotaIspravleno1ФотоModel from './models/i-i-s-kursovaya-rabota-ispravleno1-фото';
import IISKursovayaRabotaIspravleno1ФотокиоскModel from './models/i-i-s-kursovaya-rabota-ispravleno1-фотокиоск';
import IISKursovayaRabotaIspravleno1ЧекModel from './models/i-i-s-kursovaya-rabota-ispravleno1-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-ispravleno1-заказ': IISKursovayaRabotaIspravleno1ЗаказModel,
    'i-i-s-kursovaya-rabota-ispravleno1-клиент': IISKursovayaRabotaIspravleno1КлиентModel,
    'i-i-s-kursovaya-rabota-ispravleno1-оператор': IISKursovayaRabotaIspravleno1ОператорModel,
    'i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска': IISKursovayaRabotaIspravleno1ПроверкаКиоскаModel,
    'i-i-s-kursovaya-rabota-ispravleno1-товары': IISKursovayaRabotaIspravleno1ТоварыModel,
    'i-i-s-kursovaya-rabota-ispravleno1-фото': IISKursovayaRabotaIspravleno1ФотоModel,
    'i-i-s-kursovaya-rabota-ispravleno1-фотокиоск': IISKursovayaRabotaIspravleno1ФотокиоскModel,
    'i-i-s-kursovaya-rabota-ispravleno1-чек': IISKursovayaRabotaIspravleno1ЧекModel
  },

  'application-name': 'Kursovaya rabota ispravleno1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota ispravleno1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota ispravleno1',
          title: 'Kursovaya rabota ispravleno1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'kursovaya-rabota-ispravleno1': {
          caption: 'KursovayaRabotaIspravleno1',
          title: 'KursovayaRabotaIspravleno1',
          'i-i-s-kursovaya-rabota-ispravleno1-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno1-чек-l': {
            caption: 'Чек',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-ispravleno1-заказ-l': IISKursovayaRabotaIspravleno1ЗаказLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-клиент-l': IISKursovayaRabotaIspravleno1КлиентLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-оператор-l': IISKursovayaRabotaIspravleno1ОператорLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l': IISKursovayaRabotaIspravleno1ПроверкаКиоскаLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-товары-l': IISKursovayaRabotaIspravleno1ТоварыLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l': IISKursovayaRabotaIspravleno1ФотокиоскLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-чек-l': IISKursovayaRabotaIspravleno1ЧекLForm,
    'i-i-s-kursovaya-rabota-ispravleno1-заказ-e': IISKursovayaRabotaIspravleno1ЗаказEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-клиент-e': IISKursovayaRabotaIspravleno1КлиентEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-оператор-e': IISKursovayaRabotaIspravleno1ОператорEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-e': IISKursovayaRabotaIspravleno1ПроверкаКиоскаEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-товары-e': IISKursovayaRabotaIspravleno1ТоварыEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-e': IISKursovayaRabotaIspravleno1ФотокиоскEForm,
    'i-i-s-kursovaya-rabota-ispravleno1-чек-e': IISKursovayaRabotaIspravleno1ЧекEForm
  },

});

export default translations;
