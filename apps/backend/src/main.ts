import { serve } from 'bun';

serve({
    fetch() {
        return new Response('Hello World!');
    },
});