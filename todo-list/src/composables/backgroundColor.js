import { computed } from "vue";

function useBackgroundColor(props) {
  return computed(() => {
    const options = {
      danger: "var(--danger-color)",
      info: "var(--info-color)",
      warning: "var(--warning-color)",
      success: "var(--accent-color)",
      secondary: "var(--secondary-color)",
    };

    return options[props.variant];
  });
}

const backgroundColorProps = {
  variant: {
    required: false,
    default: "success",
    validator(value) {
      const options = ["danger", "warning", "info", "success", "secondary"];

      return options.includes(value);
    },
  },
};

export { useBackgroundColor, backgroundColorProps };
