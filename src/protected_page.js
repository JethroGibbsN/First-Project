import React, { Component } from 'react';

export default class Logout extends Component {

    render() {
        return (
            <div className="Logout">
                <div className="Logout-header"></div>
                <form
                    id="main-logout"
                    action="./protected_page"
                    method="post">
                    <h2>
                        Welcome User
                    </h2>
                    <div class="align-right">
                        <button type="submit" onClick="./logout">Submit</button>
                    </div>
                </form>

            </div>

        );
    }

}