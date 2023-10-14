import CreatableSelect from "react-select/async-creatable";
import { ActionMeta, MultiValue } from "react-select";
import "./styles.css";
import { Avatar } from "./Avatar";
import { Chip } from "./Chip";
import colors from "./colors";
import { useState } from "react";
import { FormatOptionLabelMeta } from "react-select/dist/declarations/src/Select";
import { Option, options } from "./data";
import classNames from "classnames";

const related = [
  {
    label: "Type to search or enter a new address",
    isDisabled: true,
    value: "",
    result: false
  },
  {
    label: "Suggested people",
    options: options
      .filter((o) => Boolean(o.relationship))
      .sort((a, b) => {
        const first = a.label?.toUpperCase() || a.value.toUpperCase();
        const second = b.label?.toUpperCase() || b.value.toUpperCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      })
  }
];

const filterOptions = (inputValue: string) => {
  return options.filter(({ label, value }) => {
    if (value.toLowerCase().includes(inputValue.toLowerCase())) return true;
    if (label) {
      if (label.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
};

const loadOptions = (inputValue: string) =>
  new Promise<Option[]>((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, 25);
  });

const getInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.slice(0, 1))
    .join("");

export default function App() {
  const [selected, setSelected] = useState<Option[]>([]);
  const handleChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {
    setSelected([...newValue]);
  };
  const handleInputChange = (inputValue: any, actionMeta: any) => {};

  const formatOptionLabel = (
    { label, value, result, relationship, isDisabled }: Option,
    meta: FormatOptionLabelMeta<Option>
  ) => {
    const { context } = meta;
    return context === "value" ? (
      <div className="avatar-label-primary">
        {label} ({value})
      </div>
    ) : (
      <div className="avatar-wrapper" aria-hidden={isDisabled}>
        {result && (
          <Avatar name={label}>{label ? getInitials(label) : "👤"}</Avatar>
        )}
        <div className="avatar-label-wrapper">
          <div
            className={classNames(
              "avatar-label-primary",
              isDisabled && "disabled"
            )}
          >
            {label || value}
          </div>
          {label && result && (
            <div className="avatar-label-secondary">{value}</div>
          )}
        </div>
        {Boolean(relationship) && (
          <div className="relationship">
            <Chip>{relationship}</Chip>
          </div>
        )}
      </div>
    );
  };

  // const formatGroupLabel = ({
  //   label,
  //   options
  // }: {
  //   label: string;
  //   options: Option[];
  // }) => `${label} (${options.length})`;

  function formatCreateLabel(input: string) {
    return `add "${input}"`;
  }

  return (
    <div className="wrapper">
      <div className="aria-describe" id="aria-description">
        Type to search or enter a new address/
      </div>
      <CreatableSelect
        aria-describedby="aria-description"
        cacheOptions
        closeMenuOnSelect={false}
        defaultOptions={related}
        formatCreateLabel={formatCreateLabel}
        // formatGroupLabel={formatGroupLabel}
        formatOptionLabel={formatOptionLabel}
        hideSelectedOptions
        isClearable
        isMulti
        // isValidNewOption={(input) => Boolean(input.match(/.+@.+\..+/))}
        loadOptions={loadOptions}
        maxMenuHeight={500}
        // menuIsOpen
        menuPlacement="auto"
        noOptionsMessage={() => "Type to search or enter a new email address"}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={options}
        placeholder=""
        theme={(theme) => ({
          ...theme,
          colors: {
            primary: colors.heather[600].hex,
            primary75: colors.heather[300].hex,
            primary50: colors.heather[200].hex,
            primary25: colors.heather[25].hex,
            danger: colors.framboise[700].hex,
            dangerLight: colors.framboise[50].hex,
            neutral0: "white",
            neutral5: colors.stratus[50].hex,
            neutral10: colors.stratus[300].hex,
            neutral20: colors.matter[50].hex,
            neutral30: colors.matter[100].hex,
            neutral40: colors.matter[100].hex,
            neutral50: colors.matter[200].hex,
            neutral60: colors.matter[300].hex,
            neutral70: colors.matter[400].hex,
            neutral80: colors.matter[500].hex,
            neutral90: colors.matter[500].hex
          },
          borderRadius: 8
        })}
        styles={{
          dropdownIndicator: (base) => ({ ...base, display: "none" }),
          indicatorSeparator: (base) => ({ ...base, display: "none" })
        }}
        value={selected}
      />
      {selected.length ? (
        <>
          <p>selected emails:</p>
          <pre>
            {JSON.stringify(
              selected?.map((s) => s.value),
              null,
              2
            )}
          </pre>
        </>
      ) : null}
    </div>
  );
}
