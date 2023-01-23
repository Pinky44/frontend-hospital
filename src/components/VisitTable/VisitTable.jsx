import { tableHeader } from "src/constants";
import { convertDate } from "src/helpers/format-date";
import pencil from "src/img/pencil.png";
import basket from "src/img/basket.png";
import "./styles.scss";

const VisitTable = ({ visits, openModelDelete, openModelEdit }) => {
  return (
    <div>
      <table className="table">
        <thead className="table-header">
          <tr>
            {tableHeader.map((headers, index) => (
              <th key={index} className="table-header__name">
                {headers}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {visits.map((visit) => (
            <tr className="table-body-visit" key={visit._id}>
              <td className="table-body-visit__row">{visit.name}</td>
              <td className="table-body-visit__row">{visit.doctor}</td>
              <td className="table-body-visit__row">
                {convertDate(visit.date)}
              </td>
              <td className="table-body-visit__row">{visit.complaints}</td>
              <td className="table-body-visit">
                <button className="table-body-element__basket">
                  <img
                    src={basket}
                    alt="basket"
                    onClick={() => openModelDelete(true, visit._id)}
                  />
                </button>
                <button className="table-body-element__pencil">
                  <img
                    src={pencil}
                    alt="pencil"
                    onClick={() => openModelEdit(true, visit)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitTable;
