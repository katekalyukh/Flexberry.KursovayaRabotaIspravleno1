import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-ispravleno1-фотокиоск', 'Unit | Model | i-i-s-kursovaya-rabota-ispravleno1-фотокиоск', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-ispravleno1-заказ',
    'model:i-i-s-kursovaya-rabota-ispravleno1-клиент',
    'model:i-i-s-kursovaya-rabota-ispravleno1-оператор',
    'model:i-i-s-kursovaya-rabota-ispravleno1-проверка-киоска',
    'model:i-i-s-kursovaya-rabota-ispravleno1-товары',
    'model:i-i-s-kursovaya-rabota-ispravleno1-фото',
    'model:i-i-s-kursovaya-rabota-ispravleno1-фотокиоск',
    'model:i-i-s-kursovaya-rabota-ispravleno1-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
