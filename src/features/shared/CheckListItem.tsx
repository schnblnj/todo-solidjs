
// Define the type for the props
type CheckListItemProps = {
    text: string; // The text content for the list item
};

// CheckListItem component receives props of type CheckListItemProps
const CheckListItem = (props: CheckListItemProps) => {
    // Render the list item with a checkmark icon and text
    return (
        <li
            class="flex items-center space-x-3 rtl:space-x-reverse"
        >
            {/* Checkmark icon */}
            <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                />
            </svg>

            {/* Text content from props */}
            <span>{props.text}</span>
        </li>
    );
};

// Export the CheckListItem component
export default CheckListItem;
