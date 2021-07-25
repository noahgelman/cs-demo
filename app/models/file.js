import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') name;
  @attr('string') device;
  @attr('string') path;
  @attr('string') status;
}
