import React, {Component} from 'react';
import Contactcarddisplay from './contactcarddisplay';

export default class Contactcard extends Component{
    render()
    {
        return(
        <div className = "under">
           <Contactcarddisplay name = {'Sam'} mn = {'203-200-3806'} wp = {'203-200-6301'} email = {'rsss@gmail.com'}/>
           <Contactcarddisplay name = {'Kevin'} mn = {'203-200-2419'} wp = {'203-200-0062'} email = {'rss2s@gmail.com'} />
           <Contactcarddisplay name = {'Michael'} mn = {'203-200-0475'} wp = {'203-200-3048'} email = {'rss4s@gmail.com'}/>
        </div>
        );
    }
}