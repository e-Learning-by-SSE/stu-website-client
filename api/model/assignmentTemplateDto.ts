/**
 * Student-Management-System-API
 * The Student-Management-Sytem-API. <a href='http://localhost:3000/api-json'>JSON</a>
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LinkDto } from './linkDto';

export interface AssignmentTemplateDto { 
    /**
     * The title of this assignment.
     */
    name?: string;
    /**
     * Determines, wether students can submit, assessments should be published, etc.
     */
    state?: AssignmentTemplateDto.StateEnum;
    /**
     * Date at which this assignment should enter the IN_PROGRESS-state to allow submissions.
     */
    startDate?: Date;
    /**
     * Date at which this assignment should enter the IN_REVIEW-state to disable submissions.
     */
    endDate?: Date;
    /**
     * The type of assignment, i.e homework or project.
     */
    type?: AssignmentTemplateDto.TypeEnum;
    /**
     * Determines, wether students can submit their solutions in groups, alone or both.
     */
    collaboration?: AssignmentTemplateDto.CollaborationEnum;
    /**
     * The amount of points that can be reached by a participant (exluding bonus points).
     */
    points?: number;
    /**
     * The amount of additional bonus points, which should be exluded from the admission criteria.
     */
    bonusPoints?: number;
    /**
     * Additional information or description of this assignment.
     */
    comment?: string;
    /**
     * Unique identifier of this template.
     */
    id?: number;
    /**
     * The name of this template.
     */
    templateName: string;
    /**
     * Time between start and end of the assignment (in days).
     */
    timespanDays?: number;
    links?: Array<LinkDto>;
}
export namespace AssignmentTemplateDto {
    export type StateEnum = 'INVISIBLE' | 'CLOSED' | 'IN_PROGRESS' | 'IN_REVIEW' | 'EVALUATED';
    export const StateEnum = {
        INVISIBLE: 'INVISIBLE' as StateEnum,
        CLOSED: 'CLOSED' as StateEnum,
        INPROGRESS: 'IN_PROGRESS' as StateEnum,
        INREVIEW: 'IN_REVIEW' as StateEnum,
        EVALUATED: 'EVALUATED' as StateEnum
    };
    export type TypeEnum = 'HOMEWORK' | 'TESTAT' | 'SEMINAR' | 'PROJECT' | 'OTHER';
    export const TypeEnum = {
        HOMEWORK: 'HOMEWORK' as TypeEnum,
        TESTAT: 'TESTAT' as TypeEnum,
        SEMINAR: 'SEMINAR' as TypeEnum,
        PROJECT: 'PROJECT' as TypeEnum,
        OTHER: 'OTHER' as TypeEnum
    };
    export type CollaborationEnum = 'GROUP' | 'SINGLE' | 'GROUP_OR_SINGLE';
    export const CollaborationEnum = {
        GROUP: 'GROUP' as CollaborationEnum,
        SINGLE: 'SINGLE' as CollaborationEnum,
        GROUPORSINGLE: 'GROUP_OR_SINGLE' as CollaborationEnum
    };
}