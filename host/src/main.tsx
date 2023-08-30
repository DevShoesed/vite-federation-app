import { initFederation } from '@softarc/native-federation';

(async () => {
	
	await initFederation({
		mfe1: 'http://localhost:8174/remoteEntry.json',
		mfe2: 'http://localhost:8175/remoteEntry.json',
	});

	await import('./index');
})();