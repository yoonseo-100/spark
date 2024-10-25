import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class R050_ReactstrapPagination extends Component {
    handlePagination = (type) => {
        alert("Go " + type);
    }

    render() {
        return (
            <>
                <Pagination size="lg" aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.handlePagination("previous")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.handlePagination("1")}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.handlePagination("2")}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={e => this.handlePagination("last")} />
                    </PaginationItem>
                </Pagination>
            </>
        );
    }
}

export default R050_ReactstrapPagination;
