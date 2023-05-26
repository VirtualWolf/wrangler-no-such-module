import mustache from 'mustache';
import hello from './hello.mustache';

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response(mustache.render(hello, {}));
	},
};
