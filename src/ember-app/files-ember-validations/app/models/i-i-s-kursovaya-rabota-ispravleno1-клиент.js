import {
  defineNamespace,
  defineProjections,
  Model as КлиентMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-ispravleno1-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлиентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
