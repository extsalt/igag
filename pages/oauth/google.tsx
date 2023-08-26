export default function GoogleOauth2Login() {
	const clientId = '1080567179937-2al8ksrahq6ags30gh8s969cgaivcj9f.apps.googleusercontent.com';
	const redirectURI = 'http://localhost:3000/users/oauth/google';
	const scope = 'email';
	const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope}&response_type=code`;
	return <>
		<a href={url}>Login with Google</a>
	</>;
}