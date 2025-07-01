import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageCategories extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Categories')}
                ${placeholder('Categories list', [
            'pavadinimas',
            'trumpas aprasas',
            'filmu kiekis toje kategorijoje',
            'nuoroda i vidini puslapi',
        ])}
            </main>`;
    }
}