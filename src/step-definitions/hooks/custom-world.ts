/* Original file can be found on Allure Report's official repostory
https://github.com/allure-framework/allure-js/blob/main/packages/allure-cucumberjs/src/CucumberAllureWorld.ts */

import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import { BrowserContext, Page, PlaywrightTestOptions } from "@playwright/test";
import {
	AllureCommandStep,
	AllureCommandStepExecutable,
	LabelName,
	LinkType,
	MetadataMessage,
	ParameterOptions,
	StepBodyFunction,
} from "allure-js-commons";

const ALLURE_METADATA_CONTENT_TYPE = "application/vnd.allure.metadata+json"

type AllureWorld = Omit<AllureCommandStep, "attach" | "name" | "attachments" | "metadata">;

export interface ICustomWorld extends World {
	context?: BrowserContext
	page?: Page

	playwrightTestOptions?: PlaywrightTestOptions
}

export class CustomWorld extends World implements AllureWorld, ICustomWorld {
	constructor(options: IWorldOptions) {
		super(options)
	}
	context?: BrowserContext | undefined;
	page?: Page | undefined;
	public async label(label: string, value: string) {
	const msgBody: MetadataMessage = {
		labels: [
		{
			name: label,
			value,
		},
		],
	};

    	await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
	}

	public async link(url: string, name?: string, type?: string): Promise<void> {
		const msgBody: MetadataMessage = {
			links: [
			{
				name,
				url,
				type,
			},
			],
		};

		await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
	}

	public async parameter(name: string, value: any, options?: ParameterOptions): Promise<void> {
		const msgBody: MetadataMessage = {
			parameter: [
			{
				name,
				value: JSON.stringify(value),
				excluded: options?.excluded || false,
				mode: options?.mode,
			},
			],
		};

		await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
	}

	public async description(markdown: string): Promise<void> {
		const msgBody: MetadataMessage = {
			description: markdown,
		};

		await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
	}

	public async descriptionHtml(html: string): Promise<void> {
		const msgBody: MetadataMessage = {
			descriptionHtml: html,
		};

		await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
	}

	async step(name: string, body: StepBodyFunction) {
		const testStep = new AllureCommandStepExecutable(name);

		await testStep.run(body, async (msgBody) => {
			await this.attach(JSON.stringify(msgBody), ALLURE_METADATA_CONTENT_TYPE);
		});
	}

	public async id(allureId: string) {
		await this.label(LabelName.ALLURE_ID, allureId);
	}

	public async epic(epic: string) {
		await this.label(LabelName.EPIC, epic);
	}

	public async layer(layer: string) {
		await this.label(LabelName.LAYER, layer);
	}

	public async feature(feature: string) {
		await this.label(LabelName.FEATURE, feature);
	}

	public async story(story: string) {
		await this.label(LabelName.STORY, story);
	}

	public async suite(name: string) {
		await this.label(LabelName.SUITE, name);
	}

	public async parentSuite(name: string) {
		await this.label(LabelName.PARENT_SUITE, name);
	}

	public async subSuite(name: string) {
		await this.label(LabelName.SUB_SUITE, name);
	}

	public async owner(owner: string) {
		await this.label(LabelName.OWNER, owner);
	}

	public async severity(severity: string) {
		await this.label(LabelName.SEVERITY, severity);
	}

	public async tag(tag: string) {
		await this.label(LabelName.TAG, tag);
	}

	public async issue(name: string, url: string) {
		await this.link(url, name, LinkType.ISSUE);
	}

	public async tms(name: string, url: string) {
		await this.link(url, name, LinkType.TMS);
	}
}

setWorldConstructor(CustomWorld)