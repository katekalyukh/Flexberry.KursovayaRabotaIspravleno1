import { Serializer as ТоварыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-ispravleno1-товары';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоварыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
