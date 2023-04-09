import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Disclosure, Combobox, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import SortStackAnalytics from "../analytics/SortStackAnalytics";

const ListMedicalDisabilities = [
	{ id: 1, name: "None" },
	{ id: 2, name: "Left Hand Paralysis" },
	{ id: 3, name: "Right Hand Paralysis" },
	{ id: 4, name: "Issues Standing" },
	{ id: 5, name: "Limited Field of Vision" },
];

const PatientInfoPage = ({ patientData }) => {
	const {
		name,
		picture,
		nextCheckupDate,
		overallProgressPercentage,
		patientId,
		gamesPlayed,
		strokeType,
		rehabDuration,
		medicalDisabilities,
	} = patientData;

	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			name,
			patientId,
			nextCheckupDate,
			strokeType,
			rehabDuration,
			medicalDisabilities: medicalDisabilities.join(", "),
		},
	});

	useEffect(() => {
		setValue("name", name);
		setValue("patientId", patientId);
		setValue("nextCheckupDate", nextCheckupDate);
		setValue("strokeType", strokeType);
		setValue("rehabDuration", rehabDuration);
		setValue("medicalDisabilities", medicalDisabilities.join(", "));
	}, [patientData]);

	const onSubmit = (data) => {
		console.log(data);
		// todo - handle submit logic
	};

	const EditInputItem = ({ label, value }) => {
		return (
			<>
				<h3 className="text-lg font-semibold mb-2">{label}</h3>
				<input {...register(value)} className="w-full p-2" />
			</>
		);
	};

	function MultipleEditItem({ label, value }) {
		const [medicalDisabilities, setMedicalDisabilities] = useState([
			ListMedicalDisabilities[0],
			ListMedicalDisabilities[1],
		]);

		return (
			<>
				<h3 className="text-lg font-semibold mb-2">{label}</h3>
				<Combobox
					value={medicalDisabilities}
					onChange={setMedicalDisabilities}
					multiple>
					<div className="relative mt-1">
						<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
							<Combobox.Input
								className={
									"w-full border-none py-2 pl-3 pr-10 leading-5 text-gray-900 focus:ring-0"
								}
								{...register(value)}
								displayValue={(people) =>
									people.map((person) => person.name).join(", ")
								}
							/>
							<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</Combobox.Button>
						</div>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
							afterLeave={() => ""}>
							<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{ListMedicalDisabilities.length === 0 ? (
									<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
										Nothing found.
									</div>
								) : (
									ListMedicalDisabilities.map((person) => (
										<Combobox.Option
											key={person.id}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active ? "bg-teal-600 text-white" : "text-gray-900"
												}`
											}
											value={person}>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}>
														{person.name}
													</span>
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																active ? "text-white" : "text-teal-600"
															}`}>
															<CheckIcon
																className="h-5 w-5"
																aria-hidden="true"
															/>
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
									))
								)}
							</Combobox.Options>
						</Transition>
					</div>
				</Combobox>
			</>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 p-4">
			<div className="bg-white rounded-lg p-4 shadow space-y-4">
				<div className="flex items-center">
					<div className="relative w-20 h-20">
						<Image
							src={picture}
							layout="fill"
							objectFit="cover"
							className="rounded-full"
							alt={`${name}'s profile`}
						/>
					</div>
					<div className="ml-4">
						<h2 className="text-xl font-bold">{name}</h2>
						<p className="text-gray-500">ID: {patientId}</p>
						<p className="text-gray-500">Next Checkup: {nextCheckupDate}</p>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
					<div className="">
						<h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
						<div
							style={{ width: `${overallProgressPercentage}%` }}
							className="shadow-none flex flex-col text-center whitespace-nowrap rounded text-white justify-center bg-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 h-8">
							{overallProgressPercentage}% Complete
						</div>
						<p className="text-right text-gray-500 sr-only">
							{overallProgressPercentage}%
						</p>
					</div>
					<div className="">
						<EditInputItem label="Stroke Type" value={"strokeType"} />
					</div>
					<div className="">
						<EditInputItem
							label="Rehabilitation Duration"
							value={"rehabDuration"}
						/>
					</div>
					<div className="">
						<MultipleEditItem
							label="Medical Disabilities"
							value={"medicalDisabilities"}
						/>
					</div>
					<button
						type="submit"
						className="w-full p-2 text-white font-semibold bg-blue-500 rounded">
						Update
					</button>
				</form>
				<div className="">
					<h3 className="text-lg font-semibold mb-2">Games Played</h3>
					{gamesPlayed.map((game, index) => (
						<Disclosure key={index}>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left rounded-lg bg-white hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
										<span>{game.name}</span>
										<span>{open ? "-" : "+"}</span>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
										{game.data}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</div>
		</div>
	);
};
export default PatientInfoPage;
