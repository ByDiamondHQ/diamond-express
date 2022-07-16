import path from "path";
import * as _ from "lodash";
import { readFileSync } from "fs-extra";
import { IEmailContent } from "@/types";
import { htmlToText } from "html-to-text";

const templatesDir = path.resolve(__dirname, '..', 'emails');
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const defaults = {
    siteUrl: "config.SITE.URL",
    siteTitle: "config.SITE.TITLE"
};

const generateContent = async (name: string, data: IEmailContent) => {
    const mergedData = { ...data, ...defaults }
    console.log(mergedData)
    const content = await readFileSync(path.join(templatesDir, name + '.html'), 'utf8')
    const compiled = _.template(content)(mergedData);
    const textContent = htmlToText(compiled);

    return {
        html: compiled,
        text: textContent
    };
};


export default generateContent