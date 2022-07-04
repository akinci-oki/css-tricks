import { useEffect } from "react";
import { people } from "../../people";

function Table() {
    useEffect(() => {
        console.log(people);
    });
    return (
        <div>
            <div className="tablesec">
                <table>
                    <tr>
                        <td>Aaa</td>
                        <td rowSpan="2">Bbb</td>
                        <td>Ccc</td>
                        <td>Ddd</td>
                        <td>Eee</td>
                        <td colSpan="3">Fff</td>
                    </tr>
                    <tr>
                        <td>Aaa</td>
                        <td>Bbb</td>
                        <td>Ccc</td>
                        <td>Ddd</td>
                        <td>Eee</td>
                        <td>Fff</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Aaa</td>
                        <td>Bbb</td>
                        <td>Ccc</td>
                        <td>Ddd</td>
                        <td rowSpan="3">Eee</td>
                        <td>Fff</td>
                    </tr>
                    <tr>
                        <td>Aaa</td>
                        <td>Bbb</td>
                        <td>Ccc</td>
                        <td>Ddd</td>
                        <td>Eee</td>
                        <td>Fff</td>
                    </tr>
                    <tr>
                        <td>Aaa</td>
                        <td>Bbb</td>
                        <td>Ccc</td>
                        <td>Ddd</td>
                        <td>Eee</td>
                        <td>Fff</td>
                    </tr>
                </table>
            </div>
            <div className="table">
                <table class="gradient-border">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Phone </th>
                            <th> Email </th>
                            <th> Country </th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person, index) => {
                            return (
                                <tr key={index}>
                                    <td> {person.name} </td>
                                    <td> {person.phone} </td>
                                    <td> {person.email} </td>
                                    <td> {person.country} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
