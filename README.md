[IGAG](https://igag.in).
#### Prisma
    
```
 // step 1
 //run this and it will pick up the schema direct from collection itself
 npx prisma db pull --force
 
 // step 2
 // this will generate corresponding models
 npx prisma generate
```

#### Prisma Studio
```
 npx prisma studio
```

#### NextJs
- Link
```
import Link from 'next/link';
```

- Head
```
import Head from 'next/head';
```

- Image
```
import Image from 'next/image';
```

- Script
```
import Script from 'next/script';
```

#### Css file name must end with `module.css`
##### import using

```
import styles from './layout.module.css';

export default function Layout({ children }) {
    return <div classNameName={styles.container}>{children}</div>;
}
```

`body` and `html` tags are injected from framework

#### Chakra UI

- container
```
import {Container} from '@chakra-ui/react'
<Container maxW={'container.lg'}>Hello world</Container>
```

### Email apis
|Provider | Free Offering|
|---------|---------|
SendGrid | 100 emails/day forever
MailGun | 5K emails/month forever
SendClean | -
MailJet | 200/day forever
Postmark | 100/month test emails
SendinBlue | 300 emails/day
Mailtrap | 100/month, (rate limited)
MailerSend | 12K/month
Elasticemail | 199/day