import { FC } from "react";
import styles from "./Subscribe.module.scss";
import { PageHeading } from "src/components/PageHeading/PageHeading";
import { LabeledInput } from "src/components/LabeledInput/LabeledInput";
import { Page } from "src/components/Page/Page";
import { Button } from "src/components/Button/Button";
import { SectionHeading } from "src/components/SectionHeading/SectionHeading";
import { SubscribeModal } from "src/modals/SubscribeModal/SubscribeModal";
import gateways from "src/assets/images/payment_gatways-logos.png";
import { LabeledCheckBox } from "src/components/LabeledCheckBox/LabeledCheckBox";
import { TradingPlatforms } from "src/types";
import { useSubscribe } from "src/hooks/useSubscribe";
import { LabeledRadioButton } from "src/components/LabeledRadioButton/LabeledRadioButton";

export const Subscribe: FC = () => {
  const { data, setData, error, setError, handleSubmit, openModal, setOpenModal } = useSubscribe();

  return (
    <Page>
      <div className={styles.container}>
        <PageHeading heading={"Subscribe"} description="" />
        <div className={styles.topSection} data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1100">
          <p className={styles.punchLine}>BECOME A MEMBER</p>
          <p className={styles.description}>You are about to bcome a member of AZUR ZONE FOR ES (E-mini S&P 500 ES)</p>
          <h1 className={styles.heading}>Before Becoming a Member:</h1>
          <ol className={styles.list}>
            <li data-aos="fade-left" data-aos-delay={300} data-aos-duration={700} data-aos-anchor-placement="top">
              AZUR TRADING SYSTEM is no Holy Grails or magic tool. World Triangle Traders Inc. who has developed AZUR is
              driven to support independent traders in becoming better.
            </li>
            <li data-aos="fade-left" data-aos-delay={500} data-aos-duration={700} data-aos-anchor-placement="top">
              AZUR TRADING SYSTEM only works on a Lifetime, Lease or Free (Sim) Licensed NinjaTrader platform.
            </li>
            <li data-aos="fade-left" data-aos-delay={700} data-aos-duration={700} data-aos-anchor-placement="top">
              The Application Provider’s payment processor (“PayPal”) will automatically renew your membership until You
              cancel it, at $24.99.
            </li>
            <li data-aos="fade-left" data-aos-delay={900} data-aos-duration={700} data-aos-anchor-placement="top">
              YOU MUST READ the Terms of Service and Licencing
            </li>
          </ol>
          <SectionHeading className={styles.formHeading} heading="Start Your Account" />
          <form className={styles.form} onSubmit={handleSubmit}>
            <LabeledInput
              required={true}
              label="First Name"
              placeholder="Enter your first name..."
              value={data.firstName}
              error={error.firstName}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  firstName: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="Last Name"
              placeholder="Enter your last name..."
              value={data.lastName}
              error={error.lastName}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  lastName: "",
                }));
              }}
            />
            <div className={styles.span2}>
              <LabeledInput
                required={true}
                label="Address"
                placeholder="Enter your address..."
                value={data.address}
                error={error.address}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    address: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    address: "",
                  }));
                }}
              />
            </div>
            <LabeledInput
              required={true}
              label="City"
              placeholder="Enter your City..."
              value={data.city}
              error={error.city}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  city: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  city: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="State"
              placeholder="Enter your State..."
              value={data.state}
              error={error.state}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  state: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  state: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="Postal ZIP Code"
              placeholder="Enter your ZIP Code..."
              value={data.zipCode}
              error={error.zipCode}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  zipCode: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  zipCode: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="Country"
              placeholder="Enter your Country..."
              value={data.country}
              error={error.country}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  country: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  country: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="Phone"
              placeholder="Enter your Phone..."
              value={data.phone}
              error={error.phone}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  phone: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
            />
            <LabeledInput
              required={true}
              label="Email"
              placeholder="Enter your email..."
              value={data.email}
              error={error.email}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
                setError((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
            />
            <LabeledInput
              label="Machine ID"
              placeholder="Ninja Trader Machine ID..."
              value={data.machinId}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  machinId: e.target.value,
                }))
              }
            />
            <LabeledInput
              label="Provider"
              placeholder="Who is your data feed provider"
              value={data.provider}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  provider: e.target.value,
                }))
              }
            />
            <LabeledInput
              label="Username"
              placeholder="Enter username..."
              value={data.username}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  username: e.target.value,
                }))
              }
            />

            <div></div>

            <div className={styles.toolsOption}>
              <p className={styles.description}>Primary trading platform:</p>
              <LabeledCheckBox
                className={styles.radioButton}
                name="primary_trading_platform"
                label={TradingPlatforms.TradingView}
                checked={data.primaryTradingPlatform[TradingPlatforms.TradingView]}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    primaryTradingPlatform: {
                      ...prevData.primaryTradingPlatform,
                      [TradingPlatforms.TradingView]: !prevData.primaryTradingPlatform[TradingPlatforms.TradingView],
                    },
                  }));
                }}
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="primary_trading_platform"
                label={TradingPlatforms.ThinkOrSwim}
                checked={data.primaryTradingPlatform[TradingPlatforms.ThinkOrSwim]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    primaryTradingPlatform: {
                      ...prevData.primaryTradingPlatform,
                      [TradingPlatforms.ThinkOrSwim]: !prevData.primaryTradingPlatform[TradingPlatforms.ThinkOrSwim],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="primary_trading_platform"
                label={TradingPlatforms.NinjaTraders}
                checked={data.primaryTradingPlatform[TradingPlatforms.NinjaTraders]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    primaryTradingPlatform: {
                      ...prevData.primaryTradingPlatform,
                      [TradingPlatforms.NinjaTraders]: !prevData.primaryTradingPlatform[TradingPlatforms.NinjaTraders],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="primary_trading_platform"
                label={TradingPlatforms.Sierrachart}
                checked={data.primaryTradingPlatform[TradingPlatforms.Sierrachart]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    primaryTradingPlatform: {
                      ...prevData.primaryTradingPlatform,
                      [TradingPlatforms.Sierrachart]: !prevData.primaryTradingPlatform[TradingPlatforms.Sierrachart],
                    },
                  }))
                }
              />
            </div>

            <div className={styles.toolsOption}>
              <p className={styles.description}>Secondary trading platform:</p>
              <LabeledCheckBox
                className={styles.radioButton}
                name="secondary_trading_platform"
                label={TradingPlatforms.TradingView}
                checked={data.secondaryTradingPlatform[TradingPlatforms.TradingView]}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    secondaryTradingPlatform: {
                      ...prevData.secondaryTradingPlatform,
                      [TradingPlatforms.TradingView]: !prevData.secondaryTradingPlatform[TradingPlatforms.TradingView],
                    },
                  }));
                }}
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="secondary_trading_platform"
                label={TradingPlatforms.ThinkOrSwim}
                checked={data.secondaryTradingPlatform[TradingPlatforms.ThinkOrSwim]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    secondaryTradingPlatform: {
                      ...prevData.secondaryTradingPlatform,
                      [TradingPlatforms.ThinkOrSwim]: !prevData.secondaryTradingPlatform[TradingPlatforms.ThinkOrSwim],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="secondary_trading_platform"
                label={TradingPlatforms.NinjaTraders}
                checked={data.secondaryTradingPlatform[TradingPlatforms.NinjaTraders]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    secondaryTradingPlatform: {
                      ...prevData.secondaryTradingPlatform,
                      [TradingPlatforms.NinjaTraders]:
                        !prevData.secondaryTradingPlatform[TradingPlatforms.NinjaTraders],
                    },
                  }))
                }
              />
              <LabeledCheckBox
                className={styles.radioButton}
                name="secondary_trading_platform"
                label={TradingPlatforms.Sierrachart}
                checked={data.secondaryTradingPlatform[TradingPlatforms.Sierrachart]}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    secondaryTradingPlatform: {
                      ...prevData.secondaryTradingPlatform,
                      [TradingPlatforms.Sierrachart]: !prevData.secondaryTradingPlatform[TradingPlatforms.Sierrachart],
                    },
                  }))
                }
              />
            </div>

            <div className={styles.toolsOption}>
              <p className={styles.description}>* No. of instruments:</p>
              {error.instruments && <p className={styles.error}>{error.instruments}</p>}
              <LabeledRadioButton
                className={styles.radioButton}
                name="instruments"
                label={"1"}
                value={"1"}
                groupValue={data.instruments}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    instruments: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    instruments: "",
                  }));
                }}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="instruments"
                label={"3"}
                value={"3"}
                groupValue={data.instruments}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    instruments: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    instruments: "",
                  }));
                }}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="instruments"
                label={"6"}
                value={"6"}
                groupValue={data.instruments}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    instruments: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    instruments: "",
                  }));
                }}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="instruments"
                label={"9"}
                value={"9"}
                groupValue={data.instruments}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    instruments: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    instruments: "",
                  }));
                }}
              />
              <LabeledRadioButton
                className={styles.radioButton}
                name="instruments"
                label={"Unlimited"}
                value={"Unlimited"}
                groupValue={data.instruments}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    instruments: e.target.value,
                  }));
                  setError((prev) => ({
                    ...prev,
                    instruments: "",
                  }));
                }}
              />
            </div>

            <div className={styles.span2}>
              <Button className={styles.button} type="submit">
                Subscribe
              </Button>
            </div>
          </form>
          <img className={styles.gatways} src={gateways} alt="gatways" />
        </div>
        {openModal && <SubscribeModal handleClose={() => setOpenModal(false)} data={data} />}
      </div>
    </Page>
  );
};
