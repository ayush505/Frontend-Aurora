import gql from 'graphql-tag';

export default gql`
  mutation eventRegister($eventId: Int!) {
    eventRegister(eventId: $eventId) {
      code
      message
      success
      team {
        id
        name
        members {
          name
          id
        }
        event {
          id
          name
          fee
          parentEvent
          maxSize
          isNameRequired
        }
        paymentStatus
        pendingInvitations {
          id
          name
        }
      }
    }
  }
`;
