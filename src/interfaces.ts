export interface MoviePlaying {
	__type: string;
	MovieId: number;
	Name: string;
	Code: string;
	State: null;
	Format: string;
	Version: string;
	Link: string;
	NameWithFormatAndVersion: string;
	PremiereDate: string;
	DateOfEntry: string;
	Rank: number;
	Published: boolean;
	Highlight: boolean;
	PageCreated: boolean;
	MarkedAsDeleted: boolean;
	ImageUrl: string;
	Properties: PropertiesItem[];
	Images: null;
	LastUpdateDate: string;
	MoviePlayingOrder: number;
	ThreeDOrder: number;
	ImaxOrder: number;
	ShowOrder: number;
	PremiereOrder: number;
	AgeClass: null;
	Distributor: null;
	Duration: null;
	Year: null;
	Cinemas: null;
}

interface PropertiesItem {
	ID: number;
	PropertyTypeID: number;
	Code: string;
	Name: string;
	Description: null;
	DataType: null;
	ContentType: null;
	ControlType: null;
	Entity: null;
	Required: boolean;
	Visible: boolean;
	Value: string;
}

export interface Genre {
	__type: string;
	ID: number;
	Name: string;
	Code: string;
}

export interface Cinema {
	__type: string;
	CinemaID: number;
	Code: string;
	Name: string;
	Zone: Zone;
	Order: number;
	PageCreated: boolean;
	Link: string;
	ImageUrl: string;
	ImageSmallUrl: string;
	ImageMediumUrl: string;
	ImageLargeUrl: string;
	ImageExtension: string;
	ImageSmallExtension: string;
	ImageMediumExtension: string;
	ImageLargeExtension: string;
	Properties: null;
	Rooms: RoomsItem[];
	Sessions: null;
	Movies: null;
	MarkedAsDeleted: boolean;
	LastUpdateDate: string;
}
interface Zone {
	__type: string;
	ID: number;
	Name: string;
}
interface RoomsItem {
	ID: number;
	RoomNumber: number;
	Name: null;
	Description: null;
	Capacity: number;
	CinemaCode: null;
	CinemaName: null;
	Sessions: null;
}
