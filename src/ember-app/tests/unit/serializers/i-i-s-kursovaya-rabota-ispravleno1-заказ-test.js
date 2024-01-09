import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-ispravleno1-заказ', 'Unit | Serializer | i-i-s-kursovaya-rabota-ispravleno1-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-ispravleno1-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-ispravleno1-вид-носителя',
    'transform:i-i-s-kursovaya-rabota-ispravleno1-выбор-вида',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
