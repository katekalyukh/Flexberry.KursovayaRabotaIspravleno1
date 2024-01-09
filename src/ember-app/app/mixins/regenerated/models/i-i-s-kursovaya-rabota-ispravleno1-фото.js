import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  заказ: DS.belongsTo('i-i-s-kursovaya-rabota-ispravleno1-заказ', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno1-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno1-фото.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-kursovaya-rabota-ispravleno1-фото', {
    количество: attr('Количество', { index: 0 }),
    заказ: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-заказ', 'Вид фото', {
      фотокиоск: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-фотокиоск', '', {
        товары: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-товары', '', {
          вид: attr('Вид фото', { index: 1 }),
          стоимость: attr('Стоимость', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ФотоL', 'i-i-s-kursovaya-rabota-ispravleno1-фото', {
    количество: attr('Количество', { index: 0 }),
    заказ: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-заказ', 'Вид фото', {
      фотокиоск: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-фотокиоск', '', {
        товары: belongsTo('i-i-s-kursovaya-rabota-ispravleno1-товары', '', {
          вид: attr('Вид фото', { index: 1 }),
          стоимость: attr('Стоимость', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
