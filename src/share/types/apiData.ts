/* eslint-disable @typescript-eslint/no-namespace */

export namespace RawData {
  export interface Problem {
    /**
     * Problem ID
     *
     * @see {@link FormattedData.Problem.problemId | FormattedData.Problem.problemId }
     */
    readonly pid: number;
    /**
     * Problem Number. Different from problem ID
     *
     * @see {@link FormattedData.Problem.problemNum | FormattedData.Problem.problemNum }
     */
    readonly num: number;
    /**
     * Problem Title
     *
     * @see {@link FormattedData.Problem.title | FormattedData.Problem.title }
     */
    readonly title: string;
    /**
     * Number of Distinct Accepted User (DACU)
     *
     * @see {@link FormattedData.Problem.distinctAcceptedUser | FormattedData.Problem.distinctAcceptedUser }
     */
    readonly dacu: number;
    /**
     * Best Runtime of an Accepted Submission
     *
     * @see {@link FormattedData.Problem.bestRuntime | FormattedData.Problem.bestRuntime }
     */
    readonly mrun: number;
    /**
     * Best Memory used of an Accepted Submission
     *
     * @see {@link FormattedData.Problem.bestMemoryUsage | FormattedData.Problem.bestMemoryUsage }
     */
    readonly mmem: number;
    /**
     * Number of No Verdict Given (can be ignored)
     *
     * @see {@link FormattedData.Problem.numNoVerdict | FormattedData.Problem.numNoVerdict }
     */
    readonly nover: number;
    /**
     * Number of Submission Error
     *
     * @see {@link FormattedData.Problem.numSubmissionError | FormattedData.Problem.numSubmissionError }
     */
    readonly sube: number;
    /**
     * Number of Can't be Judged
     *
     * @see {@link FormattedData.Problem.numCantBeJudged | FormattedData.Problem.numCantBeJudged }
     */
    readonly noj: number;
    /**
     * Number of In Queue
     *
     * @see {@link FormattedData.Problem.numInQueue | FormattedData.Problem.numInQueue }
     */
    readonly inq: number;
    /**
     * Number of Compilation Error
     *
     * @see {@link FormattedData.Problem.numCompilationError | FormattedData.Problem.numCompilationError }
     */
    readonly ce: number;
    /**
     * Number of Restricted Function
     *
     * @see {@link FormattedData.Problem.numRestrictedFunction | FormattedData.Problem.numRestrictedFunction }
     */
    readonly rf: number;
    /**
     * Number of Runtime Error
     *
     * @see {@link FormattedData.Problem.numRuntimeError | FormattedData.Problem.numRuntimeError }
     */
    readonly re: number;
    /**
     * Number of Output Limit Exceeded
     *
     * @see {@link FormattedData.Problem.numOutputLimitExceeded | FormattedData.Problem.numOutputLimitExceeded }
     */
    readonly ole: number;
    /**
     * Number of Time Limit Exceeded
     *
     * @see {@link FormattedData.Problem.numTimeLimitExceeded | FormattedData.Problem.numTimeLimitExceeded }
     */
    readonly tle: number;
    /**
     * Number of Memory Limit Exceeded
     *
     * @see {@link FormattedData.Problem.numMemoryLimitExceeded | FormattedData.Problem.numMemoryLimitExceeded }
     */
    readonly mle: number;
    /**
     * Number of Wrong Answer
     *
     * @see {@link FormattedData.Problem.numWrongAnswer | FormattedData.Problem.numWrongAnswer }
     */
    readonly wa: number;
    /**
     * Number of Presentation Error
     *
     * @see {@link FormattedData.Problem.numPresentationError | FormattedData.Problem.numPresentationError }
     */
    readonly pe: number;
    /**
     * Number of Accepted
     *
     * @see {@link FormattedData.Problem.numAcceptedAnswer | FormattedData.Problem.numAcceptedAnswer }
     */
    readonly ac: number;
    /**
     * Problem Run-Time Limit (milliseconds)
     *
     * @see {@link FormattedData.Problem.runTimeLimit | FormattedData.Problem.runTimeLimit }
     */
    readonly rtl: number;
    /**
     * Problem Status (0 = unavailable, 1 = normal, 2 = special judge)
     *
     * @see {@link FormattedData.Problem.problemStatus | FormattedData.Problem.problemStatus }
     */
    readonly status: 0 | 1 | 2;
    readonly rej: number;
  }
}

export namespace FormattedData {
  export interface Problem {
    /**
     * Problem ID
     *
     * @see {@link RawData.Problem.pid | RawData.Problem.pid }
     */
    readonly problemId: number;
    /**
     * Problem Number. Different from problem ID
     *
     * @see {@link RawData.Problem.num | RawData.Problem.num }
     */
    readonly problemNum: number;
    /**
     * Problem Title
     *
     * @see {@link RawData.Problem.title | RawData.Problem.title }
     */
    readonly title: string;
    /**
     * Number of Distinct Accepted User (DACU)
     *
     * @see {@link RawData.Problem.dacu | RawData.Problem.dacu }
     */
    readonly distinctAcceptedUser: number;
    /**
     * Best Runtime of an Accepted Submission
     *
     * @see {@link RawData.Problem.mrun | RawData.Problem.mrun }
     */
    readonly bestRuntime: number;
    /**
     * Best Memory used of an Accepted Submission
     *
     * @see {@link RawData.Problem.mmem | RawData.Problem.mmem }
     */
    readonly bestMemoryUsage: number;
    /**
     * Number of No Verdict Given (can be ignored)
     *
     * @see {@link RawData.Problem.nover | RawData.Problem.nover }
     */
    readonly numNoVerdict: number;
    /**
     * Number of Submission Error
     *
     * @see {@link RawData.Problem.sube | RawData.Problem.sube }
     */
    readonly numSubmissionError: number;
    /**
     * Number of Can't be Judged
     *
     * @see {@link RawData.Problem.noj | RawData.Problem.noj }
     */
    readonly numCantBeJudged: number;
    /**
     * Number of In Queue
     *
     * @see {@link RawData.Problem.inq | RawData.Problem.inq }
     */
    readonly numInQueue: number;
    /**
     * Number of Compilation Error
     *
     * @see {@link RawData.Problem.ce | RawData.Problem.ce }
     */
    readonly numCompilationError: number;
    /**
     * Number of Restricted Function
     *
     * @see {@link RawData.Problem.rf | RawData.Problem.rf }
     */
    readonly numRestrictedFunction: number;
    /**
     * Number of Runtime Error
     *
     * @see {@link RawData.Problem.re | RawData.Problem.re }
     */
    readonly numRuntimeError: number;
    /**
     * Number of Output Limit Exceeded
     *
     * @see {@link RawData.Problem.ole | RawData.Problem.ole }
     */
    readonly numOutputLimitExceeded: number;
    /**
     * Number of Time Limit Exceeded
     *
     * @see {@link RawData.Problem.tle | RawData.Problem.tle }
     */
    readonly numTimeLimitExceeded: number;
    /**
     * Number of Memory Limit Exceeded
     *
     * @see {@link RawData.Problem.mle | RawData.Problem.mle }
     */
    readonly numMemoryLimitExceeded: number;
    /**
     * Number of Wrong Answer
     *
     * @see {@link RawData.Problem.wa | RawData.Problem.wa }
     */
    readonly numWrongAnswer: number;
    /**
     * Number of Presentation Error
     *
     * @see {@link RawData.Problem.pe | RawData.Problem.pe }
     */
    readonly numPresentationError: number;
    /**
     * Number of Accepted
     *
     * @see {@link RawData.Problem.ac | RawData.Problem.ac }
     */
    readonly numAcceptedAnswer: number;
    /**
     * Problem Run-Time Limit (milliseconds)
     *
     * @see {@link RawData.Problem.rtl | RawData.Problem.rtl }
     */
    readonly runTimeLimit: number;
    /**
     * Problem Status (0 = unavailable, 1 = normal, 2 = special judge)
     *
     * @see {@link RawData.Problem.status | RawData.Problem.status }
     */
    readonly problemStatus: 0 | 1 | 2;
    readonly rej: number;
  }
}

/**
 * A map to connect RawData.Problem interface properties with FormattedData.Problem properties
 */
export const rawToNormalizedProblemMap = {
  pid: 'problemId',
  num: 'problemNum',
  title: 'title',
  dacu: 'distinctAcceptedUser',
  mrun: 'bestRuntime',
  mmem: 'bestMemoryUsage',
  nover: 'numNoVerdict',
  sube: 'numSubmissionError',
  noj: 'numCantBeJudged',
  inq: 'numInQueue',
  ce: 'numCompilationError',
  rf: 'numRestrictedFunction',
  re: 'numRuntimeError',
  ole: 'numOutputLimitExceeded',
  tle: 'numTimeLimitExceeded',
  mle: 'numMemoryLimitExceeded',
  wa: 'numWrongAnswer',
  pe: 'numPresentationError',
  ac: 'numAcceptedAnswer',
  rtl: 'runTimeLimit',
  status: 'problemStatus',
  rej: 'rej',
};
