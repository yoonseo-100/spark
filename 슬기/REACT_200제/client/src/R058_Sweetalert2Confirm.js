import React, { Component } from "react";
import Swal from 'sweetalert2';

class R058_Sweetalert2Confirm extends Component {
    deletAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '#01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if (result.isConfirmed) { // result.value를 result.isConfirmed로 수정
                document.getElementById('deleteId').remove(); // deleteID를 deleteId로 수정
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제완료',
                    'success'
                );
            }
        });
    }

    render() {
        return (
            <>
                <h1 id='deleteId'>sweetalert2</h1> {/* ID 이름을 deleteId로 일치시킴 */}
                <button onClick={e => this.deletAlert()}>삭제</button>
            </>
        );
    }
}

export default R058_Sweetalert2Confirm;
