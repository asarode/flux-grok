import alt from '../alt';
import Immutable from 'immutable';
import BucketActions from '../actions/bucketActions';

class BucketStore() {
  constructor() {
    this.bindListeners({
      onFetch: BucketActions.fetch,
      onCreate: BucketActions.create,
      onDestroy: BucketActions.destroy
    });

    // State
    this.buckets = Immutable.Map({});

  }

  onFetch() {

  }

  onCreate() {

  }

  onDestroy() {

  }

}

export default alt.createStore(BucketStore, 'BucketStore');
