namespace Firestore {
  export class Connection {
    private authToken: string;
    private baseUrl: string;
    constructor(authToken: string, projectId: string) {
      this.authToken = authToken;
      this.baseUrl = "https://firestore.googleapis.com/v1beta1/projects/" + projectId + "/databases/(default)/documents/";
    }

    /**
     * Get a document.
     *
     * @param {string} path the path to the document
     * @return {object} the document object
     */
    public getDocument(path: string) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return getDocument_(path, request);
    }

    /**
     * Get a list of all documents in a collection.
     *
     * @param {string} path the path to the collection
     * @return {object} an array of the documents in the collection
     */
    public getDocuments(path: string) {
      return query(path).execute();
    }

    /**
     * Get a list of all IDs of the documents in a path
     *
     * @param {string} path the path to the collection
     * @return {object} an array of IDs of the documents in the collection
     */
    public getDocumentIds(path: string) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return getDocumentIds_(path, request);
    }

    /**
     * Create a document with the given fields and an auto-generated ID.
     *
     * @param {string} path the path where the document will be written
     * @param {object} fields the document's fields
     * @return {object} the Document object written to Firestore
     */
    public createDocument(path: string, fields) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return createDocument_(path, fields, request);
    }

    /**
     * Update/patch a document at the given path with new fields.
     *
     * @param {string} path the path of the document to update.
     *                      If document name not provided, a random ID will be generated.
     * @param {object} fields the document's new fields
     * @param {boolean} mask if true, the update will use a mask
     * @return {object} the Document object written to Firestore
     */
    public updateDocument(path: string, fields, mask) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return updateDocument_(path, fields, request, mask);
    }

    /**
     * Run a query against the Firestore Database and
     *  return an all the documents that match the query.
     * Must call .execute() to send the request.
     *
     * @param {string} path to query
     * @return {object} the JSON response from the GET request
     */
    public query(path: string) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return query_(path, request);
    }

    /**
     * Delete the Firestore document at the given path.
     * Note: this deletes ONLY this document, and not any subcollections.
     *
     * @param {string} path the path to the document to delete
     * @return {object} the JSON response from the DELETE request
     */
    public deleteDocument(path) {
      const request = new FirebaseRequest(this.baseUrl, this.authToken);
      return deleteDocument_(path, request);
    }
  }

}