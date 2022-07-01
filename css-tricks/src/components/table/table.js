import { useEffect } from "react";
import { people } from "../../people";

function Table() {
    useEffect(() => {
        console.log(people);
    });
    return (
        <div className="table">
            <div class="gradient-border">
                <table>
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
