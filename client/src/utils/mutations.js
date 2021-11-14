import { gql } from '@apollo/client';



export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK_old = gql`
    mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            username    
            _id
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            username
            _id
            bookCount
            savedBooks {
                title
                authors
                description
                bookId
                image
                link
            }
        }
    }
`;
  

export const REMOVE_BOOK=gql`
    mutation removeBook($bookId: String) {
    removeBook(bookId: $bookID) {
        username
        _id
        bookCount
            savedBooks {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;