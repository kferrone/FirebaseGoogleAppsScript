/**
 * Get an object that acts as an authenticated interface with a Firestore project.
 *
 * @param {string} email the user email address (for authentication)
 * @param {string} key the user private key (for authentication)
 * @param {string} projectId the Firestore project ID
 * @return {object} an authenticated interface with a Firestore project
 */
function getFirebase(projectId: string): Firebase.Connection {
  return new Firebase.Connection(projectId);
}
