
/* ========================================================

    CONNECT

======================================================== */

// Libs

import React from 'react'
import Helmet from 'react-helmet'

import { Button } from 'components/form/button'
import { Text, TextArea } from 'components/form/input'

const Connect = () => (

    <>

        <Helmet
            title = 'Connect :: Heart of Code'
            meta={[
                { name: 'description', content: 'Connect with me.' },
            ]}
        />

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <label for='name'>Name</label>
                <Text uid='name' injectStyle={`width: 100%;`} />

                <label for='email'>Email</label>
                <Text uid='email' injectStyle={`width: 100%;`} />

                <label for='message'>Message</label>
                <TextArea uid='message' resize='vertical' rows={6} injectStyle={`width: 100%;`} />

                <Button type="submit">Send</Button>

            </form>

        </div>

    </>

)

export default Connect