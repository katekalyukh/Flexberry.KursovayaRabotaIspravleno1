import {
  defineNamespace,
  defineProjections,
  Model as ПроверкаКиоскаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверкаКиоскаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
