import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-ispravleno1-заказ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
