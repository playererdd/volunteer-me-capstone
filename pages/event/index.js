import Container from 'react-bootstrap/Container'
import React from 'react';

import SiteNav from '../../components/sitenav'
import { list_events } from '../../db/access'

import withSession from '../../lib/session'

export default class AllEvents extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <SiteNav user={this.props.user}/>
            <Container fluid>
            <h1>List of Events:</h1>
            <ul>
            {
                this.props.events.map((event) => {
                    return (
                        <li key={event.id}>
                            <a href={"event/" + event.id}>{event.title}</a>
                        </li>
                    )
                })
            }
            </ul>
            </Container>
            </>
        )    
    }
}

export const getServerSideProps = withSession(async function ({ req, res }) {  

    // Check if the user is logged in. If not redirect to login page.
    const user = req.session.get('user')
    if (user == null) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    // Get the list of events and render them.
    const data = await list_events(user)
    return { 
        props: {
            events: data,
            user: req.session.get('user'),
        },
    }
})
