import { Serializer as КлиентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-ispravleno1-клиент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлиентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
