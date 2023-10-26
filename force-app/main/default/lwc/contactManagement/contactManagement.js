import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/fetchContactController.getContacts';
export default class ContactManagement extends LightningElement {
    @wire(getContacts) wiredContacts;

}