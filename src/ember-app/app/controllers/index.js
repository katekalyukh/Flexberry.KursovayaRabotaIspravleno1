import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-ispravleno1-заказ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-заказ-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-клиент-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-оператор-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-фотокиоск-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-товары-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-товары-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno1-чек-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno1.i-i-s-kursovaya-rabota-ispravleno1-чек-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})