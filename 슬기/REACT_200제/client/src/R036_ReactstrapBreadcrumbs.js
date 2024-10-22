import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                {/* Breadcrumb navigation */}
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go to Top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go to Bottom</BreadcrumbItem>
                </Breadcrumb>
                
                {/* Bottom content */}
                <div id="bottom" style={{ marginTop: "1000px" }}>
                    <span>bottom</span>
                </div>
            </div>
        );
    }
}

export default R036_ReactstrapBreadcrumbs;
