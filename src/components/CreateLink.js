import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { useHistory } from 'react-router-dom'

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

function CreateLink() {

    const history = useHistory();
   
    const [state, setState] = React.useState({
        description: '',
        url: '',
    })

    const {description, url} = state

    return (
        <div>
            <div className='flex flex-column mt3'>
                <input
                    className="mb2"
                    value={description}
                    onChange={({target: {value}})=> setState({
                        ...state,
                        description: value
                    })}
                    type='text'
                    placeholder='A description for the link'
                />
                <input
                    className="mb2"
                    value={url}
                    onChange={({target: {value}})=> setState({
                        ...state,
                        url: value
                    })}
                    type='text'
                    placeholder='the url for the link'
                />
                <Mutation 
                    mutation={POST_MUTATION} 
                    variables={{description, url}}
                    onCompleted={() => history.push('/')}
                    >
                    {(postMutation) => (
                        <button onClick={postMutation}>Submit</button>
                    )}
                </Mutation>
            </div>
        </div>
    )
}

export default CreateLink
