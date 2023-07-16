import { FC } from "react";
import styles from "./Tools.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import graphImage from "src/assets/images/promo_sample.jpg";
import { Page } from "src/components/Page/Page";
import { Link } from "react-router-dom";
import logo from "src/assets/images/logo_azur.png";
import scrollRight from "src/assets/images/scrollRightBlue.png";
import { toolsConfig } from "src/config/toolsConfig";
import { ToolType } from "src/types";

export const Tools: FC = () => {
  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Tools"} description="" />
        <section className={styles.section}>
          <div className={styles.promoSection}>
            <img
              className={styles.image}
              src={graphImage}
              alt="promo"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
            />
            <p className={styles.heading} data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
              This Is Promo Heading
            </p>
            <p className={styles.helperText} data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
              This is the helper text for this promo campaign
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <img
            className={styles.scroll}
            src={scrollRight}
            alt="scroll right"
            data-aos="fade-right"
            data-aos-delay={400}
            data-aos-duration={1000}
          />
          <div className={styles.toolsTableSection}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.header}>
                  <th rowSpan={2}>
                    <div className={styles.tableData + " " + styles.heading}>
                      <img className={styles.logo} src={logo} alt="logo" />
                    </div>
                  </th>
                  {Object.keys(toolsConfig).map((tool) => (
                    <th
                      colSpan={Object.keys(toolsConfig[tool]).filter((tool) => tool !== "className").length}
                      className={styles[toolsConfig[tool].className as string]}
                    >
                      <div className={styles.tableData + " " + styles.heading}>{tool}</div>
                    </th>
                  ))}
                </tr>
                <tr className={styles.header}>
                  {Object.keys(toolsConfig).map((tool) =>
                    Object.keys(toolsConfig[tool])
                      .filter((type) => type !== "className")
                      .map((type) => (
                        <th className={styles[(toolsConfig[tool][type] as ToolType).className]}>
                          <Link to={`/subscribe?toolName=${tool}&type=${type}`}>
                            <div className={styles.tableData + " " + styles.subHeading}>
                              <div className={styles.type}>{type}</div>
                              <div className={styles.price}>({(toolsConfig[tool][type] as ToolType).price})</div>
                            </div>
                          </Link>
                        </th>
                      ))
                  )}
                </tr>
              </thead>
              <tbody>
                {/* Features */}
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      FEATURES:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Daily levels (before market open)</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows the main key levels (LIS, Bulls/Bears gates)</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Default colors for all levels type</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows daily targets</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows all 7 key levels</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Extended daily levels (no max)</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Integrated weekly & monthly levels</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Shows which timeframe players on each key level</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Swing traders levels (upcoming feature)</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Special Features */}
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      SPECIAL FEATURES:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Bias box showing who is in control (LT, IT, ST and CP)</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Moving levels</div>
                  </td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Guide Box that provides suggested setup & warning</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>✅</td>
                  <td></td>
                  <td>✅</td>
                  <td></td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Provides signals w/trade location, targets, stop loss</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Provides warning signs and active risk assessment</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Set risk tolerance (Min R/R, Stop pts, etc.)</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Set # of targets</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Included */}
                <tr className={styles.tableRow + " " + styles.yellow}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      INCLUDED:
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Discord room (channels, insights, nuggets, etc.)</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Videos (education)</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Support</div>
                  </td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                {/* Pricing */}
                <tr className={styles.tableRow + " " + styles.lightGreen}>
                  <td>
                    <div className={styles.tableData} style={{ fontWeight: "bold" }}>
                      PRICE (for the first Machine ID/Username)(2)
                    </div>
                  </td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / On time</td>
                  <td style={{ fontWeight: "bold" }}>USD / On time</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                  <td style={{ fontWeight: "bold" }}>USD / Month</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>1 instrument (ex. ES, NQ, CL, GC, BTCUSD, etc)</div>
                  </td>
                  <td>$25</td>
                  <td>$50</td>
                  <td>$75</td>
                  <td>$100</td>
                  <td>$150</td>
                  <td>$50</td>
                  <td>$75</td>
                  <td>$50</td>
                  <td>$75</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>3 instruments</div>
                  </td>
                  <td>$37.50</td>
                  <td>$75</td>
                  <td>$95</td>
                  <td>$150</td>
                  <td>$190</td>
                  <td>$75</td>
                  <td>$95</td>
                  <td>$75</td>
                  <td>$95</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>6 instruments</div>
                  </td>
                  <td>$45</td>
                  <td>$95</td>
                  <td>$110</td>
                  <td>$190</td>
                  <td>$220</td>
                  <td>$95</td>
                  <td>$110</td>
                  <td>$95</td>
                  <td>$110</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>9 instruments</div>
                  </td>
                  <td>Not avail.</td>
                  <td>$110</td>
                  <td>$125</td>
                  <td>$220</td>
                  <td>$250</td>
                  <td>$110</td>
                  <td>$125</td>
                  <td>$110</td>
                  <td>$125</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>Unlimited instruments (on what is available)</div>
                  </td>
                  <td>Not avail.</td>
                  <td>$145</td>
                  <td>$160</td>
                  <td>$290</td>
                  <td>$320</td>
                  <td>$145</td>
                  <td>$160</td>
                  <td>$145</td>
                  <td>$160</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>(1) Ninjatrader 8 only</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <div className={styles.tableData}>(2) 50% discount on a second MachineID</div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Page>
  );
};
