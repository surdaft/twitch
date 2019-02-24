import BaseAPI from '../BaseAPI';
import { CachedGetter } from '../../Toolkit/Decorators/Cache';
import BitsAPI from './Bits/BitsAPI';
import ChannelAPI from './Channel/ChannelAPI';
import ChatAPI from './Chat/ChatAPI';
import SearchAPI from './Search/SearchAPI';
import StreamAPI from './Stream/StreamAPI';
import UserAPI from './User/UserAPI';

export default class KrakenAPIGroup extends BaseAPI {
	/**
	 * The API methods that deal with bits.
	 */
	@CachedGetter()
	get bits() {
		return new BitsAPI(this._client);
	}

	/**
	 * The API methods that deal with channels.
	 */
	@CachedGetter()
	get channels() {
		return new ChannelAPI(this._client);
	}

	/**
	 * The API methods that deal with chat.
	 */
	@CachedGetter()
	get chat() {
		return new ChatAPI(this._client);
	}

	/**
	 * The API methods that deal with searching.
	 */
	@CachedGetter()
	get search() {
		return new SearchAPI(this._client);
	}

	/**
	 * The API methods that deal with streams.
	 */
	@CachedGetter()
	get streams() {
		return new StreamAPI(this._client);
	}

	/**
	 * The API methods that deal with users.
	 */
	@CachedGetter()
	get users() {
		return new UserAPI(this._client);
	}
}