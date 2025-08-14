import React from "react";
import CodeBlock from "@theme/CodeBlock";

export default function CodeTable({ header = [], body = [] }) {
  return (
    <table>
      {header.length > 0 && (
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <CodeBlock language={cell.language}>{cell.code}</CodeBlock>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
