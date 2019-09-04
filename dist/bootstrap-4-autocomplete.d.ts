interface AutocompleteItem {
    value: string;
    label: string;
}
interface AutocompleteOptions {
    dropdownOptions?: Bootstrap.DropdownOption;
    label?: string;
    maximumItems?: number;
    onSelectItem?: (item: AutocompleteItem) => void;
    source?: object;
    treshold?: number;
    value?: string;
}
interface JQuery {
    autocomplete(options: AutocompleteOptions): JQuery<HTMLElement>;
}