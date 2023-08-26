import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function GoogleOauthRedirectCallback() {
	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;
		fetch('http://localhost:8080/oauth/google?code=' + router.query.code, {
			credentials: 'include'
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				throw new Error();
			}).then(json => {
				router.push('/');
			})
			.catch(err => console.log(err));
		
	}, [router.isReady]);
	
	return <>Loading....</>;
};