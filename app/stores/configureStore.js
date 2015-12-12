import dev from './configureStore.dev';
import production from './configureStore.prod';

let env;
if (process.env.NODE_ENV === 'production') {
    env = production;
} else {
    env = dev;
}

export default env;
